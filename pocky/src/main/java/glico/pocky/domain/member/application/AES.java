package glico.pocky.domain.member.application;

import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;


@Service
@Log4j2
public class AES {

    public static byte[] hexToByteArray(String hex) {

        if ((hex == null) || (hex.length() == 0)) {
            return null;
        }

        byte[] ba = new byte[hex.length() / 2];

        for (int i = 0; i < ba.length; ++i) {
            ba[i] = (byte) Integer.parseInt(hex.substring(2 * i, 2 * i + 2), 16);
        }

        return ba;

    }

    public static String byteArrayToHex(byte[] ba) {

        if ((ba == null) || (ba.length == 0)) {
            return null;
        }

        StringBuffer stringBuffer = new StringBuffer(ba.length * 2);

        for (int x = 0; x < ba.length; ++x) {
            String hexNumber = "0" + Integer.toHexString(0xFF & ba[x]);

            stringBuffer.append(hexNumber.substring(hexNumber.length() - 2));
        }

        return stringBuffer.toString();
    }

    public static String encrypt(String key, String message) throws Exception {

        SecretKeySpec skeySpec = new SecretKeySpec(key.getBytes(), "AES");

        Cipher cipher = Cipher.getInstance("AES");
        cipher.init(1, skeySpec);

        byte[] encrypted = cipher.doFinal(message.getBytes());

        return byteArrayToHex(encrypted);
    }

    public static String decrypt(String key, String encrypted) throws Exception {

        String originalString = "";

        try {
            SecretKeySpec skeySpec = new SecretKeySpec(key.getBytes(), "AES");

            Cipher cipher = Cipher.getInstance("AES");
            cipher.init(2, skeySpec);

            byte[] original = cipher.doFinal(hexToByteArray(encrypted));
            originalString = new String(original);

        } catch (NullPointerException npe) {
            log.error("NullPointerException : {}" + npe);
        } catch (Exception localException) {
            log.error("localException : {}" + localException);
        }

        return originalString;
    }

}