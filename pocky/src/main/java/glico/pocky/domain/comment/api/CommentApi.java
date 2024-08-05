package glico.pocky.domain.comment.api;

import glico.pocky.domain.comment.application.CommentService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Log4j2(topic = "comment")
@RequestMapping("/comment")
public class CommentApi {

    private final CommentService commentService;

    @Autowired
    public CommentApi (CommentService commentService){this.commentService = commentService;}
}
