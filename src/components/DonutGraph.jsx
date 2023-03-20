import { useEffect,  useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import Animated, { useSharedValue, withTiming, useAnimatedProps, useDerivedValue, 
} from 'react-native-reanimated';
import { ReText } from 'react-native-redash';
import Svg, { Circle } from 'react-native-svg';

// https://www.youtube.com/watch?v=9n2mQJ7TO6Y&list=PLjHsmVtnAr9TWoMAh-3QMiP7bPUqPFuFZ&index=9

const BACKGROUND_COLOR = '#444B6F';
const BACKGROUND_STROKE_COLOR = '#fff';
const STROKE_COLOR = 'yellow'

const { width, height } = Dimensions.get('window');


const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const DonutGraph = props => {
    const {
      value,
      maxValue,
      suffix,
      donutWidth,
      radius,
      donutColor,
      txtSize,
      txtColor,
      inActiveDonutColor,
      inActiveDonutWidth,
    } = props;  

  const progress = useSharedValue(0);
  const CIRCLE_LENGTH = Math.floor(2 * Math.PI * radius);
  const R = radius;
  const coorCenter = R + (donutWidth / 2);
  const graphWidth = ( 2 * R ) + donutWidth;

  var backgroundDonutWidth
  var backgroundDonutColor
  var sizeFont

  if(txtSize === undefined) {
      const sizeFont = Math.floor((0.7 * radius) + 2.5);
  }
  else{
    sizeFont = txtSize;
  }
  
  if (inActiveDonutColor === undefined)  {
      backgroundDonutColor = 'transparent'
  }
  else{
      backgroundDonutColor = inActiveDonutColor
  }

  if(inActiveDonutWidth === undefined) {
      backgroundDonutWidth = donutWidth
  }
  else{
    backgroundDonutWidth = inActiveDonutWidth
  }


  var ValueToOne = value / maxValue;      // valor a mostar --> (valor a mostar / valor máximo )

  useEffect(() => {
    progress.value = withTiming(ValueToOne, { duration: 1500 });
  }, []);

  const animatedProps = useAnimatedProps(() => ({
    //strokeDashoffset: Math.floor(CIRCLE_LENGTH * (1 - progress.value)),
    strokeDashoffset: CIRCLE_LENGTH * (1 - progress.value),
  }));

  const progressText = useDerivedValue(() => {
    return suffix !== undefined ? 
        `${Math.floor(progress.value * maxValue)}${suffix}`:
        `${Math.floor(progress.value * maxValue)}`;
  });

  return (
    <View style={[styles.container, {width: graphWidth , height: graphWidth }]}>
        <ReText style={[styles.progressText, { fontSize: sizeFont, color: txtColor, 
                         width: graphWidth }]} 
            text={progressText}  />
        <Svg style={{ position: 'absolute'}}>
          <Circle 
                cx  = { coorCenter } 
                cy = { coorCenter }
                r={R}
                stroke = {backgroundDonutColor}
                strokeWidth={backgroundDonutWidth}
            />
            <AnimatedCircle 
                cx  = { coorCenter } 
                cy = { coorCenter }
                r={R}
                stroke = {donutColor}
                strokeWidth={donutWidth}
                strokeDasharray={CIRCLE_LENGTH}
                animatedProps={animatedProps}
                strokeLinecap={'round'}
            />
        </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 55,
    height: 55,   
    backgroundColor: 'transparent',
  },
  progressText: {
    fontStyle: 'bold',
    marginTop: 15,
    textAlign: 'center',
  },
});

DonutGraph.defaultProps = {
  value: 0,
  donutWidth: 15,
  radio: 25,
  donutColor: STROKE_COLOR,
  txtColor: 'white',
  inActiveDonutColor: BACKGROUND_STROKE_COLOR,
};

export default DonutGraph;