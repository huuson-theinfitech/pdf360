import { Components, Theme } from '@mui/material';
import AppBar from './AppBar';
import Autocomplete from './Autocomplete';
import Avatar from './Avatar';
import Backdrop from './Backdrop';
import Button from './Button';
import Card from './Card';
import Checkbox from './Checkbox';
import Chip from './Chip';
import Container from './Container';
import Dialog from './Dialog';
import Drawer from './Drawer';
import Icon from './Icon';
import Input from './Input';
import Link from './Link';
import List from './List';
import Menu from './Menu';
import Pagination from './Pagination';
import Stack from './Stack';
import Table from './Table';
import Tabs from './Tabs';
import Typography from './Typography';

export default function ComponentsOverrides(theme: Theme): Components<Theme> {
  return Object.assign(
    AppBar(theme),
    Autocomplete(theme),
    Avatar(theme),
    Backdrop(theme),
    Button(theme),
    Card(theme),
    Checkbox(theme),
    Chip(theme),
    Container(theme),
    Dialog(theme),
    Drawer(theme),
    Icon(theme),
    Input(theme),
    Pagination(theme),
    Stack(theme),
    List(theme),
    Menu(theme),
    Link(theme),
    Table(theme),
    Tabs(theme),
    Typography(),
  ) as Components<Theme>;
}
