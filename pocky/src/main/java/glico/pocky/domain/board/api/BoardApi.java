package glico.pocky.domain.board.api;

import glico.pocky.domain.board.application.BoardService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

    /*@GetMapping("/list")
    public String boardList() {
        return "pages/channel/channelList";
    }*/

    @GetMapping (value = "/list")
    public List<?> list() {

        List<?> boardList = boardService.getBoardList();

        log.info("boardList : {}", boardList);

        return boardList;
    }
}
