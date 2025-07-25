import { Board, BoardCreateInput } from '../types/board';
import { selectBoardList, insertBoard, selectBoardDetail } from './boardMapper';

// 게시글 목록 조회
export async function getBoardList(page: number, limit: number): Promise<{ posts: Board[]; totalCount: number; currentPage: number; totalPages: number }> {
    const posts = await selectBoardList(page, limit);
    const totalCount = posts.length;
    const totalPages = Math.ceil(totalCount / limit);
    return { posts, totalCount, currentPage: page, totalPages };
}

// 게시글 작성
export async function createBoard(input: BoardCreateInput): Promise<{ status: string; message: string }> {
    await insertBoard(input);
    return { status: 'success', message: '게시글 작성 성공' };
} 


//게시글 상세보기
export async function getPostDetail(myBoardPk: number) : Promise<Board | null> {
    const result = await selectBoardDetail(myBoardPk);
    return result;
}