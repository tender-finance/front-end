import React from 'react';
import classNames from 'classnames';

import { useThemeContext } from '@aave/aave-ui-kit';

import staticStyles from './style';

interface TableHeaderButtonProps {
  sortName?: string;
  sortDesc?: boolean;
  sortKey?: string;
  setSortName?: (value: string) => void;
  setSortDesc?: (value: boolean) => void;
  withSorting?: boolean;
  subTitle?: string;
  title: string;
  className?: string;
  size?: 'normal' | 'small';
}

export default function TableHeaderButton({
  sortName,
  sortDesc,
  sortKey,
  setSortName,
  setSortDesc,
  withSorting,
  subTitle,
  title,
  className,
  size = 'normal',
}: TableHeaderButtonProps) {
  const { currentTheme } = useThemeContext();

  const handleSorting = (name: string) => {
    setSortDesc && setSortDesc(false);
    setSortName && setSortName(name);
    if (sortName === name) {
      setSortDesc && setSortDesc(!sortDesc);
    }
  };

  return (
    <>
      {withSorting && sortKey ? (
        <button
          onClick={() => handleSorting(sortKey)}
          className={classNames(
            'TableHeaderButton TableHeaderButton__withSort',
            {
              TableHeaderButton__desk: sortName === sortKey && sortDesc,
              TableHeaderButton__sort: sortName === sortKey,
              TableHeaderButton__withSubTitle: !!subTitle,
            },
            className,
            `TableHeaderButton__${size}`
          )}
          type="button"
        >
          {!!subTitle && <span>{subTitle}</span>}
          <p>{title}</p>
          <svg
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.131649 7.56871C-0.0425002 7.39456 -0.0425002 7.11429 0.131649 6.94014C0.218724 6.85306 0.331649 6.80952 0.445935 6.80952C0.560221 6.80952 0.673146 6.85306 0.76022 6.94014L2.30171 8.48299L2.30172 0.444896C2.30172 0.199998 2.50035 -1.21523e-06 2.74661 -1.1937e-06C2.99287 -1.17217e-06 3.19151 0.198638 3.19151 0.444896L3.19151 8.48299L4.733 6.94014C4.90715 6.76599 5.18743 6.76599 5.36158 6.94014C5.53573 7.11429 5.53573 7.39456 5.36158 7.56871L3.0609 9.86939C2.9779 9.95374 2.86498 10 2.74661 10C2.62825 10 2.51532 9.95374 2.43233 9.86939L0.131649 7.56871Z"
              fill="#54CE90"
            />
          </svg>
        </button>
      ) : (
        <div
          className={classNames(
            'TableHeaderButton',
            {
              TableHeaderButton__withSubTitle: !!subTitle,
            },
            className
          )}
        >
          {!!subTitle && <span>{subTitle}</span>}
          <p>{title}</p>
        </div>
      )}

      <style jsx={true}>{staticStyles}</style>
      <style jsx={true}>{`
        .TableHeaderButton {
          color: ${currentTheme.textDarkBlue.hex};
          span {
            color: ${currentTheme.lightBlue.hex};
          }

          &__withSort {
            &:hover {
              p {
                &:after {
                  border-top-color: ${currentTheme.textDarkBlue.hex};
                }
              }
            }
            p {
              &:after {
                border-top-color: ${currentTheme.lightBlue.hex};
              }
            }
          }

          &__sort {
            p {
              &:after {
                border-top-color: ${currentTheme.textDarkBlue.hex};
              }
            }
          }

          &__desk {
            p {
              &:after {
                border-bottom-color: ${currentTheme.textDarkBlue.hex};
              }
            }
          }
        }
      `}</style>
    </>
  );
}
