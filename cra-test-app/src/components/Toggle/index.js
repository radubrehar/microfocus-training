import React, { useState } from 'react';

const Toggle = props => {
  const { value, defaultValue, onToggleChange, style, ...domProps } = props;

  const [valueFromState, setValue] = useState(!!defaultValue);

  const valueIsControlled = value !== undefined;
  const theValue = valueIsControlled ? value : valueFromState;

  const toggleValue = event => {
    if (domProps.onClick) {
      domProps.onClick(event);
    }
    const newValue = !theValue;

    if (!valueIsControlled) {
      setValue(newValue);
    }

    if (onToggleChange) {
      onToggleChange(newValue);
    }
  };

  return (
    <div
      {...domProps}
      onClick={toggleValue}
      style={{
        display: 'inline-block',
        padding: 10,
        border: '1px solid gray',
        ...style
      }}
    >
      Value: {theValue + ''}
    </div>
  );
};

export default Toggle;
