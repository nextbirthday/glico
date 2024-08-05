package glico.pocky.domain.board.domain;

import glico.pocky.domain.channel.domain.Channel;
import glico.pocky.domain.member.domain.Member;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.apache.ibatis.type.Alias;

@Getter
@Setter
@ToString
@Alias("Board")
public class Board {

    private Long boardId;

    private String title;

    private String content;
    private String thumbnailUrl;

    /* 조회수 */
    private Long viewCount;
    /* 추천 수 */
    private Long likeCount;
    /* 비추천 수 */
    private Long dislikeCount;
    /* 댓글 수 */
    private Long commentCount;
    /* 상단 고정 여부 */
    private int isPinned;
    /* 게시글 잠금 */
    private int isLocked;
    /*게시글 삭제 여부 */
    private int isDeleted;
    private String lastCommentedAt;
    private String createdAt;
    private String updatedAt;

    private String deletedAt;

    /* Channel Object*/
    private Channel channel;

    /* Member Object*/
    private Member author;

}
