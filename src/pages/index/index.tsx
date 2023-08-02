import { View, ListView,Navigator,Textarea,Text,Image,Video } from '@tarojs/components'
import { useLoad,navigateTo } from '@tarojs/taro'
import './index.less'
import cuteImg from '../../assets/images/cute.png'
import movieVideo from '../../assets/video/movie.mp4'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })
  const moduleList = [{label:'module1',id:1,url:'/pages/module1/index'},{label:'module2',id:2,url:'/pages/module2/index'}]
// const handleJump = (item) => {
//   navigateTo({url:item.url})
// }
  return (
    <View className='index'>
      {/* {moduleList.map((item) => <ListView  key={item.id} className='list_view_item' onClick={() => handleJump(item)}>
        {item.label}
        </ListView>)} */}
         {moduleList.map((item) => <ListView  key={item.id} className='list_view_item'>
        <Navigator url={item.url}>{item.label}</Navigator>
        </ListView>)}
        <View>
          <Text>多行输入框</Text>
          <Textarea style='background:#fff;width:100%;min-height:80px;padding:10px;border:1px solid  #eee;box-sizing:border-box;' autoHeight /> 
        </View>
        <Image style='width: 200px;height: 180px;background: #fff;'
          src={cuteImg}
        ></Image>
        <Video 
          id='video'
          // src={movieVideo}
          // poster={cuteImg}
          src='https://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
          poster='https://misc.aotu.io/booxood/mobile-video/cover_900x500.jpg'
          initialTime={0}
          controls
          autoplay={false}
          loop={false}
          muted={false}
        ></Video>
    </View>
  )
}
