package glico.pocky.domain.comment.dao;

import lombok.extern.log4j.Log4j2;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Log4j2(topic = "comment")
@Repository
public class CommentDao {

    private final SqlSessionTemplate sqlSessionTemplate;

    @Autowired
    public CommentDao (SqlSessionTemplate sqlSessionTemplate){this.sqlSessionTemplate = sqlSessionTemplate;}
}
