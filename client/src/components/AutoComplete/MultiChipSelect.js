import React from "react";
import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Downshift from "downshift";
import Chip from '@material-ui/core/Chip';
import CancelIcon from '@material-ui/icons/Cancel';

const styles = theme => ({
  chipContainer: {
    backgroundColor: "transparent",
    display: "inline-block",
    marginBottom: 10
  },
  chip: {
    marginTop: 10,
    marginRight: 5
  },
  paper: {
    maxHeight: "150px",
    width: "100%"
  }
});

const renderInput = inputProps => {
  const { InputProps, classes, availableItems } = inputProps;

  const allItemSelected = availableItems.length === 0;

  return (
    <TextField
      fullWidth
      label={
        allItemSelected ? "No more skills to add" : "Skill Tags"
      }
      variant="outlined"
      disabled={allItemSelected}
      InputProps={{
        classes: {
          input: classes.input
        },
        ...InputProps
      }}
    />
  );
};

const renderChipList = inputProps => {
  const { classes, selectedItem, onRemoveItem } = inputProps;
  return (
    <div className={classes.chipContainer}>
      {selectedItem.length > 0 &&
        selectedItem.map(item => (
          <Chip
            key={item}
            className={classes.chip}
            label={item}
            deleteIcon={<CancelIcon />}
            onDelete={() => onRemoveItem(item)}
            onClick={() => onRemoveItem(item)}
          />
        ))}
    </div>
  );
};

const renderSuggestion = params => {
  const { item, index, itemProps, highlightedIndex, selectedItem } = params;
  const isHighlighted = highlightedIndex === index;
  const isSelected = selectedItem.indexOf(item.name) > -1;

  return (
    !isSelected && (
      <MenuItem
        {...itemProps}
        key={item.id}
        selected={isHighlighted}
        component="div"
      >
        {item.name}
      </MenuItem>
    )
  );
};

const getSuggestions = (inputValue, itemList) =>
  itemList.filter(item =>
    item.name.toLowerCase().includes(inputValue.toLowerCase())
  );

function MultiChipSelect(props) {
  const { classes, availableItems, onRemoveItem, ...rest } = props;

  return (
    <Downshift {...rest}>
      {({
        getInputProps,
        getItemProps,
        inputValue,
        selectedItem,
        highlightedIndex,
        toggleMenu,
        isOpen
      }) => (
        <div>
          

          {renderInput({
            classes,
            selectedItem,
            availableItems,
            InputProps: {
              ...getInputProps({
                onClick: () => toggleMenu()
              })
            }
          })}
         

          {isOpen && (
            <Paper className={classes.paper} square>
              {getSuggestions(inputValue, availableItems).map((item, index) =>
                renderSuggestion({
                  item,
                  index,
                  itemProps: getItemProps({
                    item: item.name
                  }),
                  highlightedIndex,
                  selectedItem
                })
              )}
            </Paper>
          )}

{renderChipList({
            classes,
            onRemoveItem,
            selectedItem
          })}


        </div>
      )}
    </Downshift>
  );
}

export default withStyles(styles)(MultiChipSelect);
