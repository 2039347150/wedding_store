<template>
  <!-- <el-carousel
    :interval="5000"
    arrow="always"
    style="display: inline-block; width: 590px; height: 470px"
  >
    <el-carousel-item v-for="item in imgs" :key="item">
      <el-image
        style="width: 590px; height: 470px"
        :src="item"
        fit="cover"
      ></el-image>
    </el-carousel-item>
  </el-carousel> -->
  <div class="bride-grids">
    <div style="height:650px;" class="container">
      <el-row>
        <el-col span="8" style="height:100%">
          <div class="content-grid l-grids">
            <figure class="effect-bubba">
                <img src="/static/images/b1.jpg" alt=""/>
                <figcaption>
                  <h4>Nullam molestie </h4>
                  <p>In sit amet sapien eros Integer in tincidunt labore et dolore magna aliqua</p>																
                </figcaption>			
            </figure>
            <div class="clearfix"></div>
            <h3>Wedding Dresses</h3>
          </div>
          <div class="content-grid l-grids">
            <figure class="effect-bubba">
                <img src="/static/images/b2.jpg" alt=""/>
                <figcaption>
                  <h4>Nullam molestie </h4>
                  <p>In sit amet sapien eros Integer in tincidunt labore et dolore magna aliqua</p>																
                </figcaption>			
            </figure>	
            <div class="clearfix"></div>
            <h3>BridalParty & Dresses</h3>
          </div>
        </el-col>
        <el-col span="8">
          <div class="content-grid l-grids">
            <img src="/static/images/brid.jpg" alt=""/>              
            <h3>Bridesmade Dresses</h3>
          </div>
        </el-col>
        <el-col span="8">
            <div class="content-grid l-grids">
            <figure class="effect-bubba">
                <img src="/static/images/b3.jpg" alt=""/>
                <figcaption>
                  <h4>Nullam molestie </h4>
                  <p>In sit amet sapien eros Integer in tincidunt labore et dolore magna aliqua</p>																
                </figcaption>			
            </figure>	
            <div class="clearfix"></div>
            <h3>Wedding</h3>
          </div>
          <div class="content-grid l-grids">
            <figure class="effect-bubba">
                <img src="/static/images/b4.jpg" alt=""/>
                <figcaption>
                  <h4>Nullam molestie </h4>
                  <p>In sit amet sapien eros Integer in tincidunt labore et dolore magna aliqua</p>																
                </figcaption>			
            </figure>
              <div class="clearfix"></div>
            <h3>Most Beautiful</h3>
          </div>
		      <div class="clearfix"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
 
<script>
export default {
  name: 'Rotation',
  data() {
    return {
      imgs: [
        '/static/lunbo/lunbo1.webp',
        '/static/lunbo/lunbo2.webp',
        '/static/lunbo/lunbo3.webp',
      ],
    };
  },
};
</script>

<style scoped>
.el-row{
  height:auto;
}
img{
  /* width: */
}
.l-grids h4 {
	font-size:1.4em;
  font-weight:400;
  color: #fff;
}
.l-grids figure {
	position: relative;
	float: left;
	overflow: hidden;
	text-align: center;
	cursor: pointer;
	width:100%;
}
.l-grids figure img {
	position: relative;
	display: block;
}

.l-grids figure figcaption {
	/* padding: 2em; */
	color: #fff;
  font-size: 1.25em;
	-webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border:1px solid #fff;
}
.l-grids figure figcaption::before,
.l-grids figure figcaption::after {
  width:95%;
	pointer-events: none;
}

.l-grids figure figcaption{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
figure.effect-bubba:hover {
	  background-color:#00a0dc;
}
figure.effect-bubba:hover img {
  opacity: 0.3;
  width:95%;
}

figure.effect-bubba figcaption::before,
figure.effect-bubba figcaption::after {
	position: absolute;
	top: 30px;
	right: 30px;
	bottom: 30px;
	left: 30px;
	content: '';
	opacity: 0;
	-webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
	transition: opacity 0.35s, transform 0.35s;
}

figure.effect-bubba figcaption::before {
	border-top: 1px solid #fff;
	border-bottom: 1px solid #fff;
	-webkit-transform: scale(0,1);
	transform: scale(0,1);
}

figure.effect-bubba figcaption::after {
	border-right: 1px solid #fff;
	border-left: 1px solid #fff;
	-webkit-transform: scale(1,0);
	transform: scale(1,0);
}

figure.effect-bubba h4 {
  padding-top: 12%;
  width:90%;
	-webkit-transition: -webkit-transform 0.35s;
	transition: transform 0.35s;
	-webkit-transform: translate3d(0,-20px,0);
	transform: translate3d(0,-20px,0);
	opacity:0;
}

figure.effect-bubba p {
  /* padding: 15px 1em; */
  width:100%;
	opacity: 0;
	-webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
	transition: opacity 0.35s, transform 0.35s;
	-webkit-transform: translate3d(0,20px,0);
	transform: translate3d(0,20px,0);
	  font-size: 0.8em;
}

/* figure.effect-bubba:hover figcaption::before,
figure.effect-bubba:hover figcaption::after {
	opacity: 1;
	-webkit-transform: scale(1);
	transform: scale(1);
} */
figure.effect-bubba:hover h4,
figure.effect-bubba:hover p {
	opacity: 1;
	-webkit-transform: translate3d(0,0,0);
	transform: translate3d(0,0,0);
}
.content-grid{
	margin-bottom:2.5em;
}
.content-grid h3{
	margin-top:0.7em;
  /* font-size:1.8em; */
  font-size:28px;
  color:rgb(129, 128, 128);
	/* font-family: 'JosefinSans-Light'; */
}
.bride-grids{
  /* border:1px solid blue; */
}
.bride-grids img{
	width:95%;
}
.clearfix{
  clear:both;
}
</style>