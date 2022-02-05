import React from 'react';
import classNames from 'classnames';
import { gradient, useThemeContext, LabeledSwitch } from '@aave/aave-ui-kit';

type LabeledSwitcherProps = {
  value: boolean;
  leftOption: string;
  rightOption: string;
  onToggle: (value: boolean) => void;
  className?: string;
  width?: number;
  height?: number;
  fontSize?: number;
  disabled?: boolean;
  white?: boolean;
  darkOnDarkMode?: boolean;
};

export default function LabeledSwitcher({
  value,
  leftOption,
  rightOption,
  onToggle,
  className,
  width,
  height,
  fontSize,
  disabled,
  white,
  darkOnDarkMode,
}: LabeledSwitcherProps) {
  const { currentTheme, xl, lg, md, isCurrentThemeDark } = useThemeContext();

  const gradientText = gradient(
    90,
    `${currentTheme.secondary.rgb}, 1`,
    0,
    `${currentTheme.primary.rgb}, 1`,
    100
  );

  const baseWidth = xl && !md ? 160 : 240;
  const baseHeight = xl && !md ? (lg ? 26 : 32) : 36;
  const baseFontSize = xl && !md ? (lg ? 10 : 11) : 14;

  return (
    <>
      <LabeledSwitch
        value={value}
        leftOption={leftOption}
        rightOption={rightOption}
        onToggle={onToggle}
        disabled={disabled}
        className={classNames({ LabeledSwitch__white: white }, className)}
        width={width || baseWidth}
        height={height || baseHeight}
        fontSize={fontSize || baseFontSize}
      />

      <style jsx={true} global={true}>{`
        .LabeledSwitch__inner {
          background: #1c1e22 !important;
          border-radius: 4px !important;
          border-color: #1c1e22 !important;
          border-radius: 4px;
          overflow: hidden;
          height: 45px;
        }
        .LabeledSwitch {
          &__pointer {
            padding: 0;
            border-radius: 4px;
            overflow: hidden;
            span {
              background: #54ce90;
            }
          }

          &__inner {
            background: ${isCurrentThemeDark && darkOnDarkMode
              ? currentTheme.whiteItem.hex
              : currentTheme.darkBlue.hex};
            border-color: ${isCurrentThemeDark && darkOnDarkMode
              ? currentTheme.whiteItem.hex
              : currentTheme.darkBlue.hex};
          }

          button {
            span {
              font-style: normal;
              font-weight: 900;
              font-size: 16px !important;
              line-height: 19px;
              text-align: center;
              color: #76899b !important;
              -webkit-text-fill-color: #76899b !important;
            }
          }
          button.LabeledSwitch__buttonActive {
            span {
              color: #fff !important;
              -webkit-text-fill-color: #fff !important;
            }
          }
        }

        .LabeledSwitch__white {
          .LabeledSwitch__inner {
            background: ${currentTheme.textDarkBlue.hex};
            border-color: ${currentTheme.textDarkBlue.hex};
          }

          .LabeledSwitch__pointer {
            padding: 0;
            span {
              background: #54ce90;
            }
          }

          button {
            span {
              background: ${currentTheme.whiteElement.hex};
            }
          }
        }

        .LabeledSwitchDisabled {
          .LabeledSwitch__inner {
            background: ${currentTheme.disabledGray.hex};
            border-color: ${currentTheme.disabledGray.hex};
          }
        }
      `}</style>
    </>
  );
}
