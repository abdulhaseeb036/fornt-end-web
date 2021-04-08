import React, { useState } from 'react'
// import "../home/home.module.css";
import { Grid, Paper } from '@material-ui/core';
import styles from '../home/home.module.css';
import headerImagepig from '../home/assets/grpsvg.svg';
import headerImage from '../home/assets/smallone.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'


function Quote(props) {
  const [isVerified, setisVerified] = useState(false);
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    services: "",
    business: "",
    baseline: "",
    colors: "",
    functionality: "",
    budget: "",
  })
  return (
    <>
      {/* <div className={styles.wrapper}>
        <section>
          <img src={headerImagepig} 
          srcSet={`${headerImagepig} 2x, ${headerImage} 1x`} />
          <h1>Evolution Bussiness Services</h1>
        </section>

      </div> */}
      {/* <picture>
        <source media="(min-width: 681px;)" srcSet={headerImagepig}/>
        <source media="(max-width: 972px;)" srcSet={headerImage}/>
        <img src={headerImagepig} />
      </picture> */}
      <div className={styles.card}>
        <div className={styles.row}>
          <div className={`col-md-6 ${styles.text}`}>
                   aasaadaDS
          </div>
          <div className={`col-md-6 ${styles.image}`}>
            <Image src={headerImagepig} fluid />
          </div>
        </div>
      </div>

      {/* <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Oppotunity is Every where</h1>
        </Grid>
      </Grid> */}

    </>
  )
}

export default Quote;