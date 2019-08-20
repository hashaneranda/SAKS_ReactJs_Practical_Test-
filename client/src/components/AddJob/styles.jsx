export default theme => ({
    root: {
        flexGrow: 1,
        
      },
      paper: {
        padding: theme.spacing(5),
        color: theme.palette.text.secondary,
      },
      button: {
        margin: theme.spacing(1),
      },
      container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: "100%",
      },
      autoComplete: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: "100%",
      },
      upload: {
        marginLeft: theme.spacing(1),
        margin: theme.spacing(2),
        width: "100%",
        padding: theme.spacing(5),
      },
    
  });
  