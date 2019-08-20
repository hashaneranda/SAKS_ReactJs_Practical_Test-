export default theme => ({
    root: {
        flexGrow: 1,
        
      },
      paper: {
        padding: theme.spacing(5),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height : '80vh'
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
    
  });
  