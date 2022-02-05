import React from 'react';
import classNames from 'classnames';
import { DarkModeSwitcher } from '@aave/aave-ui-kit';

import LangSwitcher from '../basic/LangSwitcher';

import staticStyles from './style';
import './style.css';
interface FooterProps {
  inside?: boolean;
}

export default function Footer({ inside }: FooterProps) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__info">
          <div className="footer__column">
            <ul>
              <li className="footer__link-top">
                <a href="">Product</a>
              </li>
              <li className="footer__link">
                <a href="">Aave Protocol</a>
              </li>
              <li className="footer__link">
                <a href="">Developers</a>
              </li>
              <li className="footer__link">
                <a href="">Security</a>
              </li>
              <li className="footer__link">
                <a href="">aTakens</a>
              </li>
              <li className="footer__link">
                <a href="">Bug Bounty</a>
              </li>
              <li className="footer__link">
                <a href="">Flash Loans</a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <ul>
              <li className="footer__link-top">
                <a href="">Resources</a>
              </li>
              <li className="footer__link">
                <a href="">Rate Switching</a>
              </li>
              <li className="footer__link">
                <a href="">Whitepaper</a>
              </li>
              <li className="footer__link">
                <a href="">Aavenomics</a>
              </li>
              <li className="footer__link">
                <a href="">Ecosystem</a>
              </li>
              <li className="footer__link">
                <a href="">Careers</a>
              </li>
              <li className="footer__link">
                <a href="">Branding</a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <ul>
              <li className="footer__link-top">
                <a href="">Company</a>
              </li>
              <li className="footer__link">
                <a href="">Blog</a>
              </li>
              <li className="footer__link">
                <a href="">Teems of use</a>
              </li>
              <li className="footer__link">
                <a href="">Contact</a>
              </li>
              <li className="footer__link">
                <a href="">Privacy Policy</a>
              </li>
              <li className="footer__link">
                <a href="">Cookie Policy</a>
              </li>
            </ul>
          </div>
          <div className="footer__column footer__column-get ">
            <ul>
              <li className="footer__get">Get in touch</li>
              <li className="footer__text">Lorem Ipsum is simply dummy text of the printing </li>
              <li>
                <a className="footer__social-link facebook" href="/">
                  <img src="images/ico/facebook-ico.svg" alt="" />
                </a>
                <a className="footer__social-link twitter" href="/">
                  <img src="images/ico/twitter-ico.svg" alt="" />
                </a>
                <a className="footer__social-link lindedin" href="/">
                  <img src="images/ico/lindedin-ico.svg" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <DarkModeSwitcher />
      <LangSwitcher />

      <style jsx={true} global={true}>
        {staticStyles}
      </style> */}
    </footer>
  );
}
