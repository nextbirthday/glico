package glico.pocky.domain.channel.dao;

import glico.pocky.domain.channel.domain.Channel;
import lombok.extern.log4j.Log4j2;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Log4j2 (topic ="channel")
public class ChannelDao {
    private final SqlSessionTemplate sqlSessionTemplate;

    public ChannelDao(SqlSessionTemplate sqlSessionTemplate) {
        this.sqlSessionTemplate = sqlSessionTemplate;
    }

    public List<Channel> getChannelList() {

        List<Channel> channelList = sqlSessionTemplate.selectList("channel.getChannelList");

        return channelList;
    }

    public Channel getChannelById(String channelId) {

        Channel channel = sqlSessionTemplate.selectOne("channel.getChannelById", channelId);

        return channel;
    }
}
