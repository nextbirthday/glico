package glico.pocky.domain.board.api;

import glico.pocky.domain.board.application.BoardService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Log4j2(topic = "board")
@RequestMapping("/board")
public class BoardApi {

    private final BoardService boardService;

    @Autowired
    public BoardApi(BoardService boardService) {
        this.boardService = boardService;
    }

    @GetMapping(value = "/list")
    public List<?> list() {

        List<?> boardList = boardService.getBoardList();

        return boardList;
    }

    @GetMapping(value = "/insert")
    public int boardInsert() {

        int result = boardService.boardInsert();

        return result;
    }

    @GetMapping(value = "/update")
    public int boardUpdate() {

        int result = boardService.boardUpdate();

        return result;
    }

}