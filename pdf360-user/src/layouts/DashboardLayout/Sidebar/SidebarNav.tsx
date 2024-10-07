import { ArrowRightSvg, DeleteSvg, GearSvg, PDFSvg, XMarkSvg } from '@/assets/icons';
import { Dropzone, Logo } from '@/components';
import useGetListPdfFile from '@/hooks/useListPdfFile';
import useUploadPdf from '@/hooks/useUploadPdf';
import { IPdfFile } from '@/types/pdfFile';
import { Breakpoint, Divider, IconButton, MenuList, Stack } from '@mui/material';
import * as React from 'react';
import SidebarNavItem from './SidebarNavItem/SidebarNavItem';

interface ISidebarNavProps {
  onToggleOpen: () => void;
  foldBreakpoint?: Breakpoint;
}

const SidebarNav: React.FC<ISidebarNavProps> = ({ onToggleOpen, foldBreakpoint }) => {
  const { data, isSuccess } = useGetListPdfFile();
  const { mutate } = useUploadPdf();

  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const formData = new FormData();

      formData.append('file', e.target.files[0]);
      mutate(formData);
    }
  };

  return (
    <>
      <Stack
        direction={{ xs: 'row-reverse', md: 'row' }}
        alignItems='center'
        justifyContent='space-between'
        border='none'
      >
        <Logo disabledLink />

        {!foldBreakpoint && (
          <IconButton
            edge='start'
            onClick={onToggleOpen}
            aria-label='Close drawer'
            sx={{ m: 0, color: 'grey.800' }}
          >
            <XMarkSvg />
          </IconButton>
        )}
      </Stack>

      <Stack direction='column' flex={1} gap={2} marginTop={2} sx={{ overflowY: 'auto' }}>
        <Dropzone
          name='file'
          onChange={handleUploadImage}
          inputProps={{
            accept: ['application/pdf'].join(', '),
          }}
        />
        <MenuList component={Stack} gap={1} flex={1} sx={{ p: 0, overflowY: 'auto' }}>
          {isSuccess &&
            data.map((item: IPdfFile) => {
              return (
                <SidebarNavItem
                  key={item.id}
                  url={`/pdf/${item.id}`}
                  title={item.file_name}
                  pdfId={item.id}
                  startIcon={<PDFSvg />}
                  foldBreakpoint={foldBreakpoint}
                  endIcon={<DeleteSvg />}
                />
              );
            })}
        </MenuList>

        <Stack direction='column' gap={2}>
          {foldBreakpoint && (
            <Stack direction='column' display={{ [foldBreakpoint]: 'none' }}>
              <SidebarNavItem startIcon={<ArrowRightSvg />} onClick={onToggleOpen} />
            </Stack>
          )}

          <Divider />

          <Stack direction='column'>
            <SidebarNavItem
              title='Users & Settings'
              url='/settings'
              startIcon={<GearSvg />}
              foldBreakpoint={foldBreakpoint}
            />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default SidebarNav;
