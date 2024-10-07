import { OPENAI_API_KEY } from '@/api/apiURL';
import { Card, CircularLoading } from '@/components';
import useGetListCoordinates from '@/hooks/useListCoordinates';
import useGetListPdfFile from '@/hooks/useListPdfFile';
import { ICoordinate } from '@/types/coordinate';
import { IPdfFile } from '@/types/pdfFile';
import {
  AssistantRuntimeProvider,
  ChatModelAdapter,
  Thread,
  useComposer,
  useLocalRuntime,
} from '@assistant-ui/react';
import '@assistant-ui/react/styles/index.css';
import '@assistant-ui/react/styles/modal.css';
import { Box, Container, Drawer, Stack, useTheme } from '@mui/material';
import axios from 'axios';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, useSearchParams } from 'react-router-dom';
import PDFViewer from './PDFViewer/PDFViewer';

const drawerWidth = 350;

const MyBox = ({ box, dpi }: { box: ICoordinate; dpi: number }) => {
  const [searchParams] = useSearchParams();
  const theme = useTheme();
  const composer = useComposer();
  const handleDrawerOpen = (message: string) => {
    composer.setText(message);
    composer.send();
  };

  return (
    <Box
      key={box.id}
      sx={{
        position: 'absolute',
        left: `${(box.x_coordinate + 52) * dpi}px`,
        top: `${(box.y_coordinate + 36) * dpi}px`,
        width: `${(box.box_width + 12) * dpi}px`,
        height: `${(box.box_height + 4) * dpi}px`,
        borderRadius: theme.spacing(1.5),
        cursor: 'text',
        ':hover': {
          backgroundColor: 'rgba(0, 0, 255, 0.1)',
        },
        backgroundColor: 'transparent',
        zIndex: 1,
      }}
      onClick={() =>
        handleDrawerOpen(
          box.text
            .split('\n')
            .join(' ')
            .concat(
              searchParams.get('language') === 'jp'
                ? '\n Translate to Japanese'
                : searchParams.get('language') === 'en'
                ? '\n Translate to English'
                : '\n Translate to Vietnamese',
            ),
        )
      }
    >
      {/* {box.text} */}
    </Box>
  );
};

const PDFTranslationPage: React.FC = () => {
  const { pdfId } = useParams();
  const {
    data: listCoordinates,
    isSuccess: isGetListCoordinatesSuccess,
    isLoading: isGetListCoordinatesLoading,
  } = useGetListCoordinates(pdfId || '');
  const { data, isSuccess } = useGetListPdfFile();
  const theme = useTheme();

  const CustomModelAdapter: ChatModelAdapter = {
    async run({ messages }) {
      try {
        const response = await axios.post(
          'https://api.openai.com/v1/chat/completions',
          {
            model: 'gpt-3.5-turbo',
            messages: messages.map((msg) => ({
              role: msg.role,
              content: msg.content,
            })),
          },
          {
            headers: {
              Authorization: `Bearer ${OPENAI_API_KEY}`,
              'Content-Type': 'application/json',
            },
          },
        );

        const assistantMessage = response.data.choices[0].message;

        return {
          content: [
            {
              type: 'text',
              text: assistantMessage.content,
            },
          ],
        };
      } catch (error) {
        console.error('Error calling OpenAI API:', error);
        return {
          content: [
            {
              type: 'text',
              text: 'An error occurred while processing your request.',
            },
          ],
        };
      }
    },
  };

  const runtime = useLocalRuntime(CustomModelAdapter);

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <Container disableGutters sx={{ flexGrow: 1 }}>
        <Helmet>
          <title>PDF Translation | PDF 360</title>
        </Helmet>
        <Stack height='100%'>
          {isGetListCoordinatesLoading && <CircularLoading />}
          {isGetListCoordinatesSuccess && isSuccess && (
            <Card title='PDF Translation' sx={{ flexGrow: 1 }}>
              <Box
                sx={{
                  width: '100%',
                  position: 'relative',
                  height: 'fit-content',
                }}
              >
                <Stack width={theme.spacing(110)}>
                  <PDFViewer
                    fileName={`${import.meta.env.VITE_API_BASE_URL}/${data?.find(
                      (pdf: IPdfFile) => pdf.id === pdfId,
                    )?.file_path}`}
                  />
                </Stack>
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                  }}
                >
                  {listCoordinates.map((box: ICoordinate) => (
                    <MyBox
                      box={box}
                      dpi={880 / (data?.find((pdf: IPdfFile) => pdf.id === pdfId).page_width + 64)}
                    />
                  ))}
                </Box>
              </Box>
              <Drawer
                sx={{
                  flexShrink: 0,
                  top: 'auto',
                  '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    position: 'fixed',
                    top: theme.spacing(8),
                    height: 'calc(100% - 64px)',
                  },
                }}
                variant='permanent'
                anchor='right'
              >
                <Thread />
              </Drawer>
            </Card>
          )}
        </Stack>
      </Container>
    </AssistantRuntimeProvider>
  );
};

export default PDFTranslationPage;
