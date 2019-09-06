import React, { Component } from 'react'
import{Link} from 'react-router-dom';
export class Create extends Component {
    render() {
        return (
            <div id="home">  
                 <div id="home-container" className="m-0">
                     <div className="row m-0">
                     <div className="col-md-9 col-sm-12 ">
                     <div id="dome" class="carousel slide"               data-ride="carousel">
                        <ol class="carousel-indicators">
                        <li data-target="#dome" data-slide-to="0" class="active"></li>
                        <li data-target="#dome" data-slide-to="1"></li>
                        <li data-target="#dome" data-slide-to="2"></li>
                        </ol> 
                        <div class="carousel-inner ">
                        <div class="carousel-item active">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWQ906U5teywLiO9Howf8Ozp6dN_SpQLq1Q-k8n3ZU8zguPwC9ew" id="img"/>
                            <div class="carousel-caption d-md-block " id="carousel-body">
                             <h2>Ăn Khỏi Chơ <br/> Uống Ngất Ngay</h2>
                            <Link to="/monan"><button>Đến Ngay Nào <i class="fas fa-hand-point-up"></i></button></Link>
                            </div>
                         </div>
                         <div class="carousel-item ">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ90g5_Z1P_oz1lxndnNIN_GpsQVaZJYqy4bxcrbj67WgLdigh" id="img"/>
                        <div class="carousel-caption d-md-block " id="carousel-body" >
                             <h2>Bạn Muốn Nghe<br/> Gì Đây Hả</h2> 
                            <button>Đến Ngay Nào <i class="fas fa-hand-point-up"></i></button>
                            </div>
                         </div>
                         <div class="carousel-item ">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSphaJ49FdNUoWpwAEXVf0sQCciXfaMi76-Y9gBfnjEdajduq252w" id="img"/>
                        <div class="carousel-caption d-md-block " id="carousel-body">
                             <h2>Ăn Khỏi Chơ <br/> Uống Ngất Ngay</h2>
                            <button>Đến Ngay Nào <i class="fas fa-hand-point-up"></i></button>
                            </div>
                         </div>
                        </div>
                     </div>
                     </div> 
                     <div className="col-md-3 " >
                        <div id="carousel-right">
                            <h5>Sản Phẩm Mới nhất</h5>
                            <marquee id="test"  direction="up"  scrolldelay="75" scrollamount="3">
                                <div className="d-flex">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_NQQ8tIxdUhH15dprl2JZwSsnvQRndv7g1x6_1G1Zh05zTNcqrw" style={{width:"80px" ,height:"80px"}}/>
                                    <div id="right-content">
                                        <h5>Bánh Xèo Me</h5>
                                        <strong>12.000 đ </strong><br/>
                                        
                                        <button>Mua Hàng</button>
                                    </div>
                                </div>
                                <div className="d-flex" id="box-right">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD83PPreEf0TutaWiRZva7RIXovaEMcDLsy4oIg33YsY95d-wN" style={{width:"80px" ,height:"80px"}}/>
                                    <div id="right-content">
                                        <h5>Gỏi Thịt Heo</h5>
                                        <strong>25.000 đ</strong><br/>
                                         
                                        <button>Mua Hàng</button>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5NdxLMIbt9wfJxY8AczaB4ZM_XQjTEJkiozyrVdOAoxNawz3V" style={{width:"80px" ,height:"80px"}}/>
                                    <div id="right-content">
                                        <h5>Nhật Nguyệt</h5>
                                        <strong>9.000 đ</strong><br/>
                                         
                                        <button>Mua Hàng</button>
                                    </div>
                                </div> 
                            </marquee>
                        </div>

                     </div>
                     </div>
                 </div>
<hr/>
                <div id="body-home">
                    <h2>Những Món Ăn Hót </h2>
                    <div className="row">
                        <div className="col-md-9 col-sm-9">
                            <div className="row">
                                
                                <div className="col-md-3 mb-2"> 
                               <Link to="/monan">
                                <div class="card" >
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0_Ox5t89X0Ts-rwt5CAfId4yE1Jy3FPKb7nC3KE0RV_XPfhaWpg" class="card-img-top" alt="..."/>
                                    <div class="card-img-overlay" >
                                    <div id="card-content"> 
                                    <h5 class="card-title">Hoa Củ Quả</h5>  
                                        </div>
                                    </div>
                                    </div> 
                                    </Link>
                                </div> 
                                <div className="col-md-3">
                                <Link to="/monan">
                                <div class="card" >
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsiTckdOIogsVl27g90RCQ2DdxpBN-N3oezZ128CiYpLQIAQOQ" class="card-img-top" alt="..."/>
                                    <div class="card-img-overlay">
                                    <div id="card-content"> 
                                    <h5 class="card-title">Bò Lá Lấp</h5>  
                                        </div>
                                        
                                    </div>
                                    </div> 
                                    </Link>
                                </div> 
                                <div className="col-md-3 ">
                                <Link to="/monan">
                                <div class="card"  >
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStWmFbRcxesLClTJ0yd6TZ6nCS89e-5jYNSgWlYJteyulw5QcYUA" class="card-img-top" alt="..."/>
                                    <div class="card-img-overlay">
                                    <div id="card-content"> 
                                    <h5 class="card-title">Rứa lạnh Tỏi</h5>  
                                        </div>
                                    </div>
                                    </div> 
                                    </Link>
                                </div>

                                <div className="col-md-3 ">
                                <Link to="/monan">
                                <div class="card"  >
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrpjSrHw4m99CQ4dQl2loKo8Kn4eL6XMCKY-uuwyIo1dVvw7wc6w" class="card-img-top" alt="..."/>
                                    <div class="card-img-overlay">
                                    <div id="card-content"> 
                                    <h5 class="card-title">Gỏi Khếu Chua</h5>  
                                        </div>
                                        
                                    </div>
                                    </div> 
                                    </Link>
                                </div>

                                <div className="col-md-3">
                                <Link to="/monan">
                                <div class="card" >
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd2FjBpGfoKjOCO-GmmX80SzXF1c7FH5TzgzPgW1JZQ-XRY3vgyw" class="card-img-top" alt="..."/>
                                    <div class="card-img-overlay">
                                    <div id="card-content"> 
                                    <h5 class="card-title">Thịt Bâm Nhừ</h5>  
                                        </div>
                                        
                                    </div>
                                    </div> 
                                    </Link>
                                </div>

                                <div className="col-md-3">
                                <Link to="/monan">
                                <div class="card" >
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV3iO--AzjxVghMm_uUto22EF9yZaT4VQDL_lhAuBeleEw6KcT" class="card-img-top" alt="..."/>
                                    <div class="card-img-overlay">
                                    <div id="card-content"> 
                                    <h5 class="card-title">Cá Khô Tộ</h5>  
                                        </div>
                                        
                                    </div>
                                    </div> 
                                    </Link>
                                </div>

                                <div className="col-md-3 ">
                                <Link to="/monan">
                                <div class="card" >
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ThuzJ-UD2jOnsRcGDL7cVi4Cu4KDOJk7N2Gp4ftj-qoQfzrB" class="card-img-top" alt="..."/>
                                    <div class="card-img-overlay">
                                    <div id="card-content"> 
                                    <h5 class="card-title">Râu Nướng Bạc</h5>  
                                        </div>
                                        
                                    </div>
                                    </div> 
                                    </Link>
                                </div>

                                <div className="col-md-3 ">
                                <Link to="/monan">
                                <div class="card" >
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvCNvaTq1a_w1V3bVWJPoeAN5jOULNWochCscQX1EFactQCjBo-g" class="card-img-top" alt="..."/>
                                    <div class="card-img-overlay">
                                    <div id="card-content"> 
                                    <h5 class="card-title">Mì Sợ Hàn Quốc</h5>  
                                        </div>
                                        
                                    </div>
                                    </div> 
                                    </Link> 
                                </div>
                                
                            </div>
                            
                        </div>
                        <div className="col-md-3 col-sm-3">
                            <div id="carousel-right-1">
                                <h3>Những Món Hấp Dẫn.</h3>
                                <Link to="/monan">
                                <a>Chiêng xù Cá Chép Khủng Lồ <i class="far fa-hand-point-up"></i></a><br/>
                                <a>Con Gà Và Chảo Râu Đắng <i class="far fa-hand-point-up"></i></a><br/>
                                <a>Chiêng xù Cá Chép Khủng Lồ <i class="far fa-hand-point-up"></i></a><br/>
                                <a>Chiêng xù Cá Chép Khủng Lồ <i class="far fa-hand-point-up"></i></a><br/>
                                <a>Con Gà Và Chảo Râu Đắng <i class="far fa-hand-point-up"></i></a><br/>
                                <a>Chiêng xù Cá Chép Khủng Lồ <i class="far fa-hand-point-up"></i></a><br/>
                                <a>Chiêng xù Cá Chép Khủng Lồ <i class="far fa-hand-point-up"></i></a><br/>
                                <a>Con Gà Và Chảo Râu Đắng <i class="far fa-hand-point-up"></i></a><br/>
                                <a>Chiêng xù Cá Chép Khủng Lồ <i class="far fa-hand-point-up"></i></a><br/>
                                </Link>
                                
                            </div>
                        </div>
                    </div>
                </div>
<hr/>
                <footer>
                    <div className="row">
                        <div className="col-md-3 text-center">
                            <div id="footer-web">
                                <h5>Website<span>.com</span></h5>
                                <strong>Email:<small>trinhsatvth@gmail.com</small></strong><br/>
                                <strong>Đại Chỉ:<small>Ninh Hòa-Khánh Hòa</small></strong>
                            </div>
                        </div>
                        <div className="col-md-3 text-center">
                           <h4> Món Ăn Của Chúng Tôi</h4>
                           <span>Con Gà Nằm Trong Cái Dĩa</span><br/>
                           <span>Hải Sản Biển Nha Trang</span><br/>
                           <span>Thú Rừng Lạc Lưới</span><br/>
                           <span>Cá Người mắc Câu</span><br/>
                           <span>Những Loài Chim 7 Món</span><br/>
                        </div>
                        <div className="col-md-4 text-center">
                        <h4> Món Ăn Hiện Đại</h4>
                        <span>Dễ lùi Đen then</span><br/>
                           <span>Cá Hấp Thơm lựng</span><br/>
                           <span>Thú Rừng Lạc Lưới</span><br/>
                           <span>Cá Người mắc Câu</span><br/>
                           <span>Những Loài Chim 7 Món</span><br/>
                        </div>
                        <div className="col-md-2 text-center">
                        <h4>Liên lạc</h4>
                        <i class="fas fa-phone-volume fa-1x"> 0366636052</i><br/>
                        <i class="fab fa-facebook-square">  Võ Trung Hà</i>
                        </div>
                    </div>
                </footer>
             </div>
        )
    }
}

export default Create
