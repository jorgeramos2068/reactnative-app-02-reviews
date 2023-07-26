import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { globalStyles } from '../styles/global';

const reviewSchema = yup.object({
  title: yup.string()
    .required()
    .min(4),
  body: yup.string()
    .required()
    .min(8),
  rating: yup.string()
    .required()
    .test('is-num-1-5', 'Rating must be a number 1-5', (value) => {
      return parseInt(value) < 6 && parseInt(value) > 0
    })
});

const ReviewForm = ({addReview}) => {
  const initialValues = {
    title: '',
    body: '',
    rating: '',
  };

  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          //actions.resetForm();
          addReview(values);
        }}
      >
        {(formikProps) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review title"
              onChangeText={formikProps.handleChange('title')}
              value={formikProps.values.title}
            />
            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="Review body"
              onChangeText={formikProps.handleChange('body')}
              value={formikProps.values.body}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Rating (1-5)"
              onChangeText={formikProps.handleChange('rating')}
              value={formikProps.values.rating}
              keyboardType="numeric"
            />
            <Button
              title="Submit"
              color="maroon"
              onPress={formikProps.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ReviewForm;
