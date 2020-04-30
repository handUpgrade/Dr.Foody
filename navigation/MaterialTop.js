import {
  createMaterialTopTabNavigator,
  createAppContainer
} from "react-navigation";
import AttentionScreen from "../screens/Love/Attention";
import SearchListScreen from "../screens/Love/SearchList";
import CurationScreen from "../screens/Love/Curation";

const MaterialTop = createMaterialTopTabNavigator(
  {
    Atention: {
      screen: AttentionScreen,
      navigationOptions: {
        title: "찜한제품"
      }
    },
    SearchList: {
      screen: SearchListScreen,
      navigationOptions: { title: "조회목록" }
    },
    CurationScreen: {
      screen: CurationScreen,
      navigationOptions: { title: "큐레이션" }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "black",
      inactiveTintColor: "#6E6E6E",
      labelStyle: {
        fontSize: 17,
        fontWeight: "bold"
      },
      //탭 하단 선
      indicatorStyle: {
        width: 50,
        height: 4,
        backgroundColor: "black",
        marginLeft: 44
      },
      style: {
        backgroundColor: "white"
      }
    }
  }
);

export default createAppContainer(MaterialTop);