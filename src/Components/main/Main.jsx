import s from './Main.module.css';
import React from 'react';



const Main = ()=>{
    return <div className={s.main}>

<div className={s.imgblock}>
<img className={s.picture} src="https://farm3.staticflickr.com/2815/32761844973_4b55b27d3c_b.jpg" alt="capsule_logo" />
<button className={s.btcont}>1</button>
</div>

<div className={s.imgblock}>
<img className={s.picture} src="http://spaceflight101.com/dragon-spx10/wp-content/uploads/sites/141/2017/02/Hexapod_and_SAGEIII_in_Dragon_compartment.png" alt="trunk_logo" />
<button className={s.btcont}>2</button>
</div>

<div className={s.imgblock}>
<img className={s.picture} src="https://gordonua.com/img/article/6392/86_tn.jpg?v1546776155" alt="logo_rocket" />
<button className={s.btcont}>3</button>
</div>

</div>
}
export default Main;