package glico.pocky.domain.channel.application;

import glico.pocky.domain.channel.dao.ChannelDao;
import glico.pocky.domain.channel.domain.Channel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChannelService {

    private final ChannelDao channelDao;

    @Autowired
    public ChannelService(ChannelDao channelDao) {
        this.channelDao = channelDao;
    }

    public List<Channel> getChannelList() {

        List<Channel> channelList = channelDao.getChannelList();

        return channelList;
    }

    public Channel getChannelById(String channelId) {

        Channel channel = channelDao.getChannelById(channelId);

        return channel;
    }
}
