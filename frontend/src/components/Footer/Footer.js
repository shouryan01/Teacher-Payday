import React from 'react';
import { FooterCont } from './style';

export default function Footer() {
  const thisYear = new Date().getFullYear();

  return <FooterCont>© {thisYear} Created with ❤️ at SpartaHacks 7!</FooterCont>;
}