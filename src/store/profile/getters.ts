import { GetterTree } from 'vuex';
import { ProfileState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<ProfileState, RootState> = {    
    Names(state):string {
        const {user} = state
        const name = (user && user.name) || ''
        const userName = (user && user.username) || ''
        return `Name: ${name} userName: ${userName}`
    }
};