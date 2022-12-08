const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    appBar: '#24292e',
    appBarText: '#fff',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    heading: 30,
  },
  fonts: {
    main: 'System',
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  avatarImg: {
    width: '50',
    height: '50',
  },
  numerals: {
    display: 'flex',
    flexDirection: 'row',
    //flexWrap: "wrap",
    //backgroundColor: "oldlace",    
    //border: 'solid',
    flexBasis: 50,
    //padding: 10,
    marginTop: 20,
  },
  nmrlItem: {
    display: 'flex',
    flexDirection: 'column',
    //backgroundColor: "coral",    
    //flexBasis: 50,
    //border: 'solid',
    fontSize: 28,
    fontWeight: 'bold',
    padding: 8,
    color: '#586069',
    //overFlow: 'hidden',     
  },
  rounded: {
    display: 'flex',
    //backgroundColor: "yellow",
    justifyContent: 'center',
    minWidth: 0,
    color: '#24292e',
    //flexDirection: 'column', 
  },
  flexTitle: {
    display: 'flex',
    //alignItems: 'flex-end',
    flexWrap: 'wrap',
  },
  titleMain: {
    flexGrow: 1,
    fontSize: 32,
    fontWeight: 'bold',
  },
  titleNote: {
    color: '#586069',
    fontSize: 16,
  },
  itemBasics: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: "wrap",
    //flexGrow: 0,    
  },
  languageBox:  {
    backgroundColor: "dodgerblue",
    marginTop: 10,
    padding: 7,
    borderRadius: 8,
    //flexGrow: 0, // tavoitellaan että objekti ei veisi tilaa enempää kuin tarvitsee. faail
    alignSelf: 'flex-start', // defines box to take only neede space    
    fontWeight: 'bold',
    color: 'white',
  },
  signInView: { 
    display: 'flex',
    backgroundColor: '#fff', 
    padding: 10,
  },
  textInputBox: {
    display: 'flex',
    padding: 7,
    backgroundColor: 'white',
    border: 'solid',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#586069',
    marginTop: 10,
  },
  buttonBox: {
    display: 'flex',
    padding: 7,
    backgroundColor: "dodgerblue",
    borderRadius: 4,    
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  } 
};

export default theme;