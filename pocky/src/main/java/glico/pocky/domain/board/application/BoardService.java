package glico.pocky.domain.board.application;

import glico.pocky.domain.board.dao.BoardDao;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Log4j2(topic = "board")
@Service
public class BoardService {

    private final BoardDao boardDao;

    @Autowired
    public BoardService(BoardDao boardDao) {
        this.boardDao = boardDao;
    }

    public List<?> getBoardList() {

        List<?> boardList = boardDao.boardList();

        return boardList;
    }


    public int boardInsert() {

        int result = boardDao.boardInsert();

        return result;
    }

    public int boardUpdate() {

        int result = boardDao.boardUpdate();

        return result;
    }

}