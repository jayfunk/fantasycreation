import React, { useRef, useState } from 'react'
import { SafeAreaView, StyleSheet, View, Text, Button } from 'react-native'
import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas'

const App = () => {
  const sketchRef = useRef(null)
  const [strokeWidth, setStrokeWidth] = useState(1)
  const [strokeColor, setStrokeColor] = useState('#ff0000')

  return (
    <SafeAreaView style={{ flex: 1, padding: 10, position: 'relative' }}>
      <View style={{ backgroundColor: 'grey', flexDirection: 'column' }}>
        <View style={{ flexDirection: 'row' }}>
          <Button
            title='Erase'
            onPress={() => {
              sketchRef.current.clear()
            }}
          />
          <Button
            title='Pencil'
            onPress={() => {
              setStrokeWidth(1)
            }}
          />
          <Button
            title='Marker'
            onPress={() => {
              setStrokeWidth(10)
            }}
          />
          <Button
            title='Save'
            onPress={() => {
              sketchRef.current.save('jpg', false, 'filae', 'test2', true, true, true)
            }}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Button
            title='Red'
            onPress={() => {
              setStrokeColor('#ff0000')
            }}
          />
          <Button
            title='Orange'
            onPress={() => {
              setStrokeColor('#ff8300')
            }}
          />
          <Button
            title='Yellow'
            onPress={() => {
              setStrokeColor('#fff500')
            }}
          />
        </View>
      </View>
      <SketchCanvas
        ref={sketchRef}
        style={{ flex: 1, backgroundColor: 'white' }}
        strokeColor={strokeColor}
        strokeWidth={strokeWidth}
        onSketchSaved={(success, filePath) => {
          console.log('stat', success)
          console.log('path', filePath)
        }}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default App
