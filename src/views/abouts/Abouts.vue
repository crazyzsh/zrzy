<template>

    <div>
        <!-- IUFM介绍 -->
        <div>
            <h3 class="title"> 一. 综合城市内涝模型 IUFM</h3>
            <h3 >IUFM模型简单介绍</h3><br>
            <h4> 
                综合城市内涝模型是以城市暴雨内涝积水与排涝调度系统水力要素为主要模拟对象的GIS-Based水动力模型。模型基于多源地理信息数据构建汇水区范围内的城市层次结构与复杂环境，实现城市内涝场景下地理信息与水文水动力特征的语义映射，能够提供排涝计算功能，支持N-STEPS模型降雨输入，满足栅格级别的内涝水深时序模拟需求。
            </h4><br>
            <div class="brief">
                <ul>
                    <li>
                        <img src="../../assets/aboutsimg/one.png" alt="" width="200" height="200">
                        <p>数字地表模型</p>
                    </li>
                    <li>
                        <img src="../../assets/aboutsimg/two.png" alt="" width="200" height="200">
                        <p>城市水利设施</p>
                    </li>
                    <li>
                        <img src="../../assets/aboutsimg/three.png" alt="" width="200" height="200">
                        <p>土地利用类型</p>
                    </li>
                    <li>
                        <img src="../../assets/aboutsimg/four.png" alt="" width="200" height="200">
                        <p>雷达降雨监测</p>
                    </li>
	            </ul>
            </div> 
            <h3 >IUFM模型功能</h3><br>
            <h4>
                IUFM模型在传统城市洪涝模拟原理与方法的基础上，研究出了具有物理机制和水文机理的城市内涝模拟方法，基于”降雨-径流-排涝”的思路描述城市雨洪事件的全过程。模型系统提供强大的GIS-Based数据建模功能，隐式完成地理信息与水文水动力信息的关系映射，模型计算引擎能够自动实现”城市地表-排水管网”水动力系统的有机耦合。
            </h4><br>
            <div class="function">
                <ul>
                    <li>
                        <p>城市内涝场景建模</p><br>
                        <img src="../../assets/aboutsimg/ones.jpg" alt="" width="200" height="200">
                        <span>提供一站式建模，有序组织模拟区域内的高程数据、水文气象数据以及城市排涝调度系统信息。</span>
                    </li>
                    <li>
                        <p>支持精准降雨输入</p><br>
                        <img src="../../assets/aboutsimg/twos.png" alt="" width="200" height="200">
                        <span>在支持区域时序降雨输入的基础上，提供精准雷达降雨预报输入接口，在数据源头满足精细化模拟的需要。</span>
                    </li>
                    <li>
                        <p>内涝水动力计算</p><br>
                        <img src="../../assets/aboutsimg/threes.png" alt="" width="200" height="200">
                        <span>在城市层次化结构的基础上进行水动力计算，表达科学完整的城市洪涝水文过程。</span>
                    </li>
	            </ul>
            </div> 
                
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style  scoped>
.title{text-align: center;}
h4{text-indent: 2em;font-weight: 400;}
/* img{margin-right: 80px;} */
*{
margin: 0;
padding: 0;
list-style: none;			
}
       .brief ul{
			background: #ededed;
			height: 300px;
			width: 860px;
			margin: 0 auto;
		}
         .function ul{
			background: #ededed;
			height: 300px;
			width: 880px;
			margin: 0 auto;
		}
        img{width: 100%;height: 100%;}
		.brief ul li{
			background: #fff;
			box-sizing: border-box;
			border: 1px solid wh;
			height: 240px;
			width: 200px;
			float: left;
			margin-right: 20px;
		}
        .function ul li{
			background: #fff;
			box-sizing: border-box;
			border: 1px solid wh;
			height: 240px;
			width: 280px;
			float: left;
			margin-right: 20px;
		}
		ul li:last-child{
			margin-right: 0px;
		}
		.brief li p{
			text-align: center;
            font-weight: bold;
            background-color:rgb(120, 120, 131);
		}
        .function li p{
			text-align: center;
            font-weight: bold;
            background-color:rgb(121, 81, 121);
		}
		ul li span{
			display: block;
			font-size: 14px;
		}

		
</style>