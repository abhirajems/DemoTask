import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import Data from '../Data.json'
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
const TopTabNavigation = () => {
  const [tabData, setTabData] = useState(Data);
  const [activeTab, setActiveTab] = useState(0);

  const currentPairData = tabData[activeTab];
  const convertToIndianTime = timestamp => {
    const date = new Date(timestamp * 1000);
    const options = {
      timeZone: 'Asia/Kolkata',
      hour12: true,
      hour: 'numeric',
      minute: 'numeric',
    };
    return date.toLocaleTimeString('en-IN', options);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.tabContainer}>
        {tabData.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.tabButton, index === activeTab && styles.activeTab]}
            onPress={() => setActiveTab(index)}>
            <Text style={styles.tabText}>{tab.pair}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.contentContainer}>
        {currentPairData &&
          currentPairData.matches.map((match, index) => (
            <TouchableOpacity>
              <View key={index} style={styles.listContainer}>
                <View style={styles.imageView}>
                  <Image
                    source={{uri: match.picture}}
                    style={styles.listIcon}
                  />
                </View>
                <View style={{marginLeft: 10}}>
                  <Text style={{color: 'black', fontWeight: 'bold'}}>
                    {match.pairMatch}
                  </Text>

                  <Text style={{color: 'black'}}>
                    {match.lastText.length > 27
                      ? match.lastText.substring(0, 27) + '....'
                      : match.lastText}
                  </Text>
                </View>
                {match.new && match.unread ? (
                  <View style={styles.messagecount}>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: '500',
                        textAlign: 'center',
                      }}>
                      New
                    </Text>
                  </View>
                ) : match.unread ? (
                  <View
                    style={[
                      styles.messagecount,
                      {
                        backgroundColor: 'red',
                        height: responsiveHeight(2.5),
                        width: responsiveWidth(5),
                        borderRadius: 10,
                      },
                    ]}>
                    <Text style={{color: 'white', fontWeight: '500'}}>
                      {match.unread}
                    </Text>
                  </View>
                ) : null}

                <View style={{}}>
                  <Text>{convertToIndianTime(match.lastTime)}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  tabContainer: {
    flexDirection: 'row',
    marginLeft: responsiveWidth(5),
  },
  tabButton: {
    alignItems: 'center',
    padding: 10,
    marginRight: 8,
  },
  activeTab: {
    borderBottomColor: '#7F00FF',
    borderBottomWidth: responsiveWidth(1),
  },
  tabText: {
    fontWeight: 'bold',
    color: 'black',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 16,
  },
  listContainer: {
    // height:responsiveHeight(15),
    flexDirection: 'row',
    padding: responsiveHeight(2),
    width: responsiveWidth(90),
    backgroundColor: 'white',
    borderRadius: responsiveWidth(3),
    margin: responsiveHeight(1),
    alignItems: 'center',
  },
  listIcon: {
    resizeMode: 'contain',
    height: responsiveHeight(10),
    width: responsiveWidth(10),
  },
  imageView: {
    //   backgroundColor:'red',
    borderWidth: 0.2,
    borderRadius: 50,
    height: responsiveHeight(8),
    width: responsiveHeight(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  messagecount: {
    borderRadius: 15,
    width: responsiveWidth(12),
    height: responsiveHeight(3),
    backgroundColor: '#50C878',
    position: 'absolute',
    right: 0,
    top: 0,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TopTabNavigation;
