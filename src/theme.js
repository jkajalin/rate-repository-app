const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    appBar: '#24292e',
    appBarText: '#fff',
    errorText: '#d73a4a',
    borderColor: '#586069',
    btnColor: 'dodgerblue',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    heading: 30,
  },
  fonts: {
    main: 'System',
    android: 'Roboto',
    ios: 'Arial',
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
    //flexBasis: 50,
    //padding: 10,
    marginTop: 20,
    width: '100%',
    flexWrap: 'wrap',
    flexGrow: 0,
    justifyContent: 'space-around',     
  },
  nmrlItem: {
    display: 'flex',
    flexDirection: 'column',   
    fontSize: 19,
    fontWeight: 'bold',
    padding: 8,
    color: '#586069',
    minHeight: 50,
    maxWidth: 95,
    flexWrap: 'wrap',
    flexShrink: 1,
    flexGrow: 1,
    alignItems: 'center',                 
  },
  rounded: {
    display: 'flex',
    justifyContent: 'center',
    minWidth: 65,
    color: '#24292e',
    flexWrap: 'wrap',
  },
  flexTitle: {
    display: 'flex',
    //flexWrap: 'wrap',
    flexShrink: 1,
    //width: '100%',
  },
  titleMain: {
    flexGrow: 1,
    fontSize: 32,
    fontWeight: 'bold',
    //flexWrap: 'wrap',
    flexShrink: 1,
    //width: '100%', // needed to keep thing wrapping on mobile // drops text below image on mobile
  },
  titleNote: {
    display: 'flex',    
    color: '#586069',
    fontSize: 16,    
    //flexWrap: 'wrap',
    flexShrink: 1,
    flexGrow: 1,
    //width: '100%',
    //padding: 5,     
  },
  itemBasics: {
    display: 'flex',
    flexDirection: 'column',
    //flexWrap: "wrap",
    //flexGrow: 0,
    flexShrink: 1,
    width: '78%',    // drops title below image on web on over ~84%, works on mobile as intended at 78%    
  },
  languageBox:  {
    backgroundColor: "dodgerblue",
    marginTop: 10,
    padding: 7,
    borderRadius: 8,
    //flexGrow: 0, // tavoitellaan että objekti ei veisi tilaa enempää kuin tarvitsee. faail
    alignSelf: 'flex-start', // defines box to take only neede space ??    
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
    //backgroundColor: 'white',
    //border: 'solid',
    //borderWidth: 1,
    //borderRadius: 4,
    //borderColor: '#586069',
    marginTop: 10,
  },
  buttonBox: {
    display: 'flex',
    padding: 7,
    backgroundColor: 'dodgerblue',
    borderRadius: 4,    
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },
  reviewView: {
    display: 'flex',
    //width: '100%',
    flexDirection: 'row',
    flexWrap: "wrap",
    color: 'black', 
    backgroundColor: 'white', 
    padding: 10,
    //width: '100%',
    //flexShrink: 1,
  },
  roundedRating: {
    display: 'flex',
    width: 62,
    height: 62,
    color: 'dodgerblue',
    border: 'solid',
    borderWidth: 3,
    borderRadius: 31,
    borderColor: 'dodgerblue',
    padding: 8,
    marginRight: 10,
    marginBottom: 10,     
    //alignItems: 'center',
    justifyContent: 'center',          
  },
  reviewDetail: {
    display: 'flex',    
    //flexWrap: "wrap", // disabling weap makes things loo right on mobile
    width: '78%', // making text to fit near rating on web //
    flexShrink: 1, // no effect on mobile
  },  
  sortBtn: { 
    height: 50, 
    padding: 13, 
    margin: 10, 
    borderColor: 'black', 
    borderWidth: 2, 
    borderRadius: 10, 
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  }
};

export default theme;