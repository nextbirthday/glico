package glico.pocky.domain.board.dao;

import lombok.extern.log4j.Log4j2;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Log4j2(topic = "board")
@Repository
public class BoardDao {
    private final SqlSessionTemplate sqlSessionTemplate;

    public BoardDao(SqlSessionTemplate sqlSessionTemplate){ this.sqlSessionTemplate = sqlSessionTemplate;}

    public List<?> boardList() {

        List<?> boardList = sqlSessionTemplate.selectList( "board.getBoardList");

        return boardList;
    }

    public int boardInsert() {

        int result = sqlSessionTemplate.insert("board.boardInsert");

        return result;
    }

    public int boardUpdate() {

        int result = sqlSessionTemplate.update("board.boardUpdate");

        return result;

    }

}
