Consider the following example Component file. We will use this file to practice introducing flow typing to a React application.

```javascript
import React, { Component, PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import TypeDefinitions from 'utilities/service/TypeDefinitions';
import Filter from 'components/custom-filter/quick-filters/Filter';

import './TypeSelect.scss';

export default class TypeSelect extends Component {
  static displayName = 'TypeSelect';

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    selectedTypes: ImmutablePropTypes.listOf(PropTypes.instanceOf(TypeDefinitions)).isRequired,
    typeDefs: ImmutablePropTypes.listOf(PropTypes.instanceOf(TypeDefinitions)).isRequired
  };

  render() {
    const {
      onChange,
      selectedTypes,
      typeDefs
    } = this.props;

    const typeFilterProps = {
      onChange,
      typeDefs,
      placeholderText: this.placeholderText,
      size: 'sm',
      value: selectedTypes
    };

    return (
      <div>
        <label>{ this.labelText }</label>
        <Filter { ...typeFilterProps } />
      </div>
    );
  }
}
```

Let's start with adding flow to the file:
```javascript
@flow //add this to the top of the file
import React, { Component, PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import TypeDefinitions from 'utilities/service/TypeDefinitions';
import Filter from 'components/custom-filter/quick-filters/Filter';
...
```


Next let's try using flow typing instead of React's PropTypes:
```javascript
...
static propTypes = {
  onChange: PropTypes.func.isRequired,
  selectedTypes: ImmutablePropTypes.listOf(PropTypes.instanceOf(TypeDefinitions)).isRequired,
  typeDefs: ImmutablePropTypes.listOf(PropTypes.instanceOf(TypeDefinitions)).isRequired
};
...
```
We will need to import Immutable to define the immutable structure of two of our props while at the same time we no longer need to import TypeDefinitions and ImmutablePropTypes. We also no longer need to destructure PropTypes from react.
Start by defining a flow type:
```
type props = 
```
