import React, { Component } from 'react';
import styled from 'styled-components'
import { CssBaseline, Grid, withStyles } from '@material-ui/core'

import ImgSrc from './assets/image1.jpg'
import FormControl from './components/FormControl/FormControl';


const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  border: 1px solid #adadad;
  background: #e6e6e6;
`

const styles = theme => ({
  'img_top': {
    background: '#434343',
    borderBottom: '1px solid #000000',
    color: '#ffffff',
    textAlign: 'center',
    lineHeight: '40px'
  },
  'img_bottom': {
    fontWeight: 700,
    background: '#f0e921',
    fontSize: '14px',
    textAlign: 'center',
    height: '50px',
    lineHeight: '50px',
    cursor: 'pointer',
    borderBottom: '1px solid #c3c3c3',
    color: '#a72929'
  }
})

class App extends Component {
  render() {

    const { classes } = this.props

    return (
      <>
        <CssBaseline />
        <Container>
          <Grid item xs={12} className={classes['img_top']}>
            Beginning (시작)
          </Grid>
          <Grid item xs={12} style={{ height: 'auto', boxSizing: 'border-box', textAlign: 'center' }}>
            <img width="100%" src={ImgSrc} alt="top_image.." style={{ border: 'none' }} />
          </Grid>

          <Grid item xs={12} className={classes['img_bottom']}>

            동영상 보기 (Full HD)
          </Grid>
          <FormControl />
        </Container>
      </>
    );
  }
}

export default withStyles(styles)(App);
