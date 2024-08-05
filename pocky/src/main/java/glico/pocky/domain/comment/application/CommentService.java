package glico.pocky.domain.comment.application;

import glico.pocky.domain.comment.dao.CommentDao;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Log4j2
@Service
public class CommentService {

    private CommentDao commentDao;

    @Autowired
    public CommentService(CommentDao commentDao) {this.commentDao =commentDao;}
}
