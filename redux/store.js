import { configureStore } from '@reduxjs/toolkit';
import { trailsReducer } from '../features/trails/trailsSlice';
import { persistStore, persistCombineReducers, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const config = {
    key: 'root',
    storage: AsyncStorage,
    debug: true
}

export const store = configureStore({
    reducer: persistCombineReducers(config,{
        trails: trailsReducer
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
})

export const persister = persistStore(store);