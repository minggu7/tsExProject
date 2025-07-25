import express from 'express';
import { getBoardList, createBoard, getPostDetail } from '../services/boardService';

const router = express.Router();

// 게시글 목록 조회
router.get('/posts', async (req, res) => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = 10;
    const result = await getBoardList(page, limit);
    res.json(result);
});

// 게시글 작성
router.post('/postsCreate', async (req, res) => {
    const input = req.body;
    const result = await createBoard(input);
    res.json(result);
});

//게시글 상세보기
router.post('/postDetail', async (req, res) => {
    console.log(`postDetail 호출됨. req.body는 ${req.body.myBoardPk}`);
    const clickData = req.body;//넘어온 json 데이터. 지금은 myBoardPk가 끝이긴함
    const result = await getPostDetail(clickData.myBoardPk);
    res.json(result);
})

export default router; 