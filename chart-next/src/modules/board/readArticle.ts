import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//const boardSliceType = "slice/board";

export interface Article{
    title: string,
    content: string,
    picture?: any | undefined,
    height : string,
    weight: string
}
export interface GetArticle{

}
export interface ArticleState{
    data: Article[],
    status: 'successed' | 'loading' | 'failed'
    error: null
}
const initialState: ArticleState = {
    data: [] ,
    status: 'loading',
    error: null
}

const ArticleSlice = createSlice({
	name: 'articleSlice',
    //initialState : [] as BoardState[],
    initialState,
    reducers: {
        writeBoard: (state:ArticleState, action: PayloadAction<Article>) => {
            alert(`진행 2 : 게시글 작성 액션 요청`)
            const newArticle = state.data.concat(action.payload)
            state.data = newArticle
            state.status = 'loading'
            console.log(`게시글 작성 성공 - 리듀서 ${JSON.stringify( state.data )}`)
            //state.push({data: action.payload, status: 'loading', error: null})
        },

        writeBoardSuccess: (state:ArticleState, action: PayloadAction) => {
            state.status = 'successed'
        },

        writeBoardFailure: (state:ArticleState, action: PayloadAction) => {
            alert(`게시글 작성 실패`)
            state.status = 'failed'
        },
        
        fetchBoards : (state:ArticleState) => {
            console.log(`게시글 불러오기 - 리듀서`)
            state.status = 'loading'
        },
        
        fetchBoardSuccess: (state:ArticleState, {payload}) => {
            const fetchArticle = state.data.concat(payload)
            state.data = fetchArticle
            state.status = "successed"
            console.log(`게시글 불러오기 성공 - 리듀서 ${JSON.stringify( state.data )}`)
        },
        fetchBoardFailure: (state:ArticleState, {payload}) => {
            console.log(`게시글 불러오기 실패 - 리듀서`)
            state.error = payload;
            state.status = 'failed'
        },
            /** 
        saveBoard (state, action: PayloadAction){
            alert(`게시글 불러오기 - 리듀서`)
            
            const {value, article} = action.payload;
            return state.map((item) => {
                if(item.id === article.id) {
                    return{
                        ...article, value: value
                    }
                }
                return item
            })
        },
            */
       
    }
})

export const { writeBoard, writeBoardSuccess, writeBoardFailure, fetchBoards, fetchBoardSuccess, fetchBoardFailure } = ArticleSlice.actions;
const {reducer, actions} = ArticleSlice
export const ArticleActions = actions
export default reducer;