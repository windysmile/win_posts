import { createSlice } from '@reduxjs/toolkit'
import randomString from './generateKey';
import EFeeling from './enum';


const initialState = {
  menuIndex: 0,
  profile: {
    profileInfo: {
      key: 'J9q3WEo',
      profile_img: '/img/www.jpg',
      fullname: 'Wuttipong Sangtamat',
    },
    media: {
      picture: [],
      video: []
    }
  },
  posts: [], //{ date: '', text: '', photos: [], videos: [], feeling: { like: 0, superb: 0 , wow: 0, angry: 0 }, feelingActionPerson: [], comments: [], isOpenComment: false }
  introduce_yourself: {
    workplace: {
      company: '',
      position: '',
      addrass: '',
      detail: '',
      date: ''
    }
  }
}

export const winDataSlice = createSlice({
  name: 'winData',
  initialState,
  reducers: {
    menuActiveIndex: (state, action) => {
      state.menuIndex = action.payload;
    },
    handleChangeProfile: (state, action) => {
      state.profile.profileInfo.profile_img = action.payload.profile_img;
      state.profile.profileInfo.fullname = action.payload.fullname;
    },
    addPosts: (state, action) => {
      state.posts.splice(0, 0, { ...action.payload, key: randomString() });
    },
    addFeeling: (state, action) => {
      const findPostsState = state.posts.find((e) => e.key === action.payload.post.key);
      const findActionPerson = findPostsState.feelingActionPerson.find((e) => e.person === action.payload.actionPerson.person.key);
      if (findActionPerson) {
        findPostsState.feeling[findActionPerson.feeling] -= 1
        findActionPerson.feeling = action.payload.actionPerson.feeling
        findPostsState.feeling[action.payload.actionPerson.feeling] += 1;
      } else {
        findPostsState.feeling[action.payload.actionPerson.feeling] += 1;
        findPostsState.feelingActionPerson.push({ person: action.payload.actionPerson.person.key, feeling: EFeeling.Like })
      }
    },
    addComments: (state, action) => {
      const findPostsState = state.posts.find((e) => e.key === action.payload.posts.key);
      findPostsState.comments.push(action.payload.comment);
    },

    updateComment: (state, action) => {
      const findPostsState = state.posts.find((e) => e.key === action.payload.key);
      if (findPostsState) findPostsState.isOpenComment = !findPostsState.isOpenComment
    }
  },
})

// Action creators are generated for each case reducer function
export const { menuActiveIndex, handleChangeProfile, addPosts, addFeeling, addComments, updateComment } = winDataSlice.actions
export default winDataSlice.reducer