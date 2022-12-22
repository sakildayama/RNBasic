import { StyleSheet, ActivityIndicator } from 'react-native';
import React, { memo } from 'react';
import colors from '../../constants/colors';
import ViewContainer from '../HOC/ViewContainer'
const Loader = ({ loading = false }) => {
    return (
        <ViewContainer
            style={[styles.loader]}>
            {loading && <ActivityIndicator size={'large'} color={colors.white} />}
        </ViewContainer>
    );
};

export default memo(Loader);

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: colors.black + '70',
        ...StyleSheet.absoluteFillObject
    },
});
