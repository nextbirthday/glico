package glico.pocky.domain.member.application;

import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import java.util.Base64;

public class AES256 {

    public static String algorithm = "AES/CBC/PKCS5Padding";
    private final String key = "12345678910111213";
    private final String iv = key.substring(0, 16);


    /**
     *
      * @param text
     *  @return
     *  @throws Exception
     */
    public String encrypt(String text) throws Exception{

        Cipher cipher = Cipher.getInstance(algorithm);
        SecretKeySpec secretKeySpec = new SecretKeySpec(iv.getBytes(), "AES");
        IvParameterSpec ivParameterSpec = new IvParameterSpec(iv.getBytes());
        cipher.init(Cipher.ENCRYPT_MODE, secretKeySpec, ivParameterSpec);

        byte[] encrypted = cipher.doFinal(text.getBytes("UTF-8"));

        return Base64.getEncoder().encodeToString(encrypted);
    }

    /**
     *
     * @param cipherText
     * @return
     * @throws Exception
     */
    public String decrypt(String cipherText) throws Exception{

        Cipher cipher = Cipher.getInstance(algorithm);
        SecretKeySpec secretKeySpec = new SecretKeySpec(iv.getBytes(), "AES");
        IvParameterSpec ivParameterSpec = new IvParameterSpec(iv.getBytes());
        cipher.init(Cipher.DECRYPT_MODE, secretKeySpec, ivParameterSpec);

        byte[] decodedBytes = Base64.getDecoder().decode(cipherText);
        byte[] decrypted = cipher.doFinal(decodedBytes);

        return new String(decrypted, "UTF-8");
    }
}
