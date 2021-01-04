import React, { Component } from 'react';
import { SideNav, SideNavItem, Button, Icon, Slider, Slide, Caption, Row, MediaBox, Col, Card, CardTitle, Pagination } from "react-materialize";

class App extends Component {
  render() {
    return (
      <div>
        <SideNav
          id="SideNav-10"
          options={{ draggable: true }}
          trigger={<Button node="button"><Icon>menu</Icon></Button>}
        >
          <SideNavItem userView
            user={{
              background: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
              email: 'test@gmail.com',
              image: 'data:image/jpeg;base64,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',
              name: 'Satria Darmawan'
            }}
          />
          <SideNavItem href="#!icon" icon={<Icon>account_circle</Icon>} >
            Profil Saya
          </SideNavItem>
          <SideNavItem href="#!second" icon={<Icon>contacts</Icon>}>
            Hubungi Kami
          </SideNavItem>
          <SideNavItem divider />
          <SideNavItem subheader>
            Product
          </SideNavItem>
          <SideNavItem href="#!third" waves >
            Kesehatan
          </SideNavItem>
          <SideNavItem href="#!third" waves >
            Komputer & Aksesoris
          </SideNavItem>
          <SideNavItem href="#!third" waves >
            Gaming
          </SideNavItem>
          <SideNavItem href="#!third" waves >
            Kamera
          </SideNavItem>
          <SideNavItem href="#!third" waves >
            Olahraga
          </SideNavItem>
          <SideNavItem href="#!third" waves >
            Fashion Pria
          </SideNavItem>
          <SideNavItem href="#!third" waves >
            Fashion Wanita
          </SideNavItem>
          <br /><br /><br /> <br /><br /><br />
        </SideNav>

        <Slider
          fullscreen={false}
          options={{
            duration: 500,
            height: 400,
            indicators: true,
            interval: 6000
          }}
        >
          <Slide image={<img alt="" src=" https://s-ec.bstatic.com/images/hotel/max1024x768/106/106114417.jpg" />}>
            <Caption placement="center">
              <h3>
                Pantai
              </h3>
              <h5>
                Dapatkan kesempatan jalan-jalan ke pantai dengan membeli sebuah produk.
              </h5>
            </Caption>
          </Slide>
          <Slide image={<img alt="" src="https://haramaintour.com/blog/wp-content/uploads/2019/09/Kota-Mekkah-Haramain-Tour.jpg" />}>
            <Caption placement="left">
              <h3>
                Mekkah
              </h3>
              <h5>
                atau kesempatan berangkat ke Mekkah.
              </h5>
            </Caption>
          </Slide>
          <Slide image={<img alt="" src="https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?wid=2880&hei=1280&fmt=jpeg&crop=9,336,2699,1200&anchor=1358,936&qlt=75,0&fit=wrap&op_sharpen=0&resMode=sharp2&op_usm=0,0,0,0&iccEmbed=0&printRes=72" />}>
            <Caption placement="right">
              <h3>
                Paris
              </h3>
              <h5>
                atau kesempatan berangkat ke Paris.
               </h5>
            </Caption>
          </Slide>
        </Slider>

        <h5>Hot List</h5>

        <Row>
          <MediaBox>
            <Col m={3} s={12}>
              <Card className="small" header={<CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/8/15/25749302/25749302_274a89a6-ea41-4a3a-ac6b-ce2881016369.jpg">Audio</CardTitle>}>
                Audio Technica <br /> Mulai Dari <span className="red" >Rp 910rb</span>
              </Card>
            </Col>
          </MediaBox>

          <MediaBox>
            <Col m={3} s={12}>
              <Card className="small" header={<CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2019/1/16/25287362/25287362_a79f0aa6-cf1f-484f-b1a8-83993245cd6f.jpg">Handphone</CardTitle>}>
                Handphone Samsung <br /> Mulai Dari <span className="red" >Rp 200rb</span>
              </Card>
            </Col>
          </MediaBox>

          <MediaBox>
            <Col m={3} s={12}>
              <Card className="small" header={<CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/6/26/28201197/28201197_856195f2-b0ba-4711-8200-fd95beaf1df5.jpg">Sequishy</CardTitle>}>
                Sequishy <br /> Mulai Dari <span className="red" >Rp 5,5 rb</span>
              </Card>
            </Col>
          </MediaBox>

          <MediaBox>
            <Col m={3} s={12}>
              <Card className="small" header={<CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/4/23/28201197/28201197_0383072a-1766-453c-951a-8b53a719cff0.jpg">Koleksi The Avenger</CardTitle>}>
                Koleksi The Avenger <br /> Mulai Dari <span className="red" >Rp 10rb </span>
              </Card>
            </Col>
          </MediaBox>
        </Row>

        <Pagination items={10} activePage={2} maxButtons={8} />


      </div>
    );
  }
}

export default App;