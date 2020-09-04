# colby-hidden-block-component

Description

## Props

| Name        | Description                                                                                                                                                                                       | Type    | Default Value  |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | -------------- |
| title       | Title of the link                                                                                                                                                                                 | node    | "Hidden Block" |
| comment     | Comment/text shown after link is clicked.                                                                                                                                                         | Node    | NULL           |
| show        | Show the hidden block or not. This prop depends on the handleClick prop: If handleClick is null then it will be the default value. If handleClick is a function then it will be the actual value. | boolean | false          |
| handleClick | Callback function that runs when clicking the link.                                                                                                                                               | funct   | null           |

## Usage

### Example

```javascript
import React from 'react';
import Some from '@colbycommunications/colby-hidden-block-component';

export default () => (
    <HiddenBlock title="Show hidden block">
        <div>Hidden Content</div>
    </HiddenBlock>
);
```
