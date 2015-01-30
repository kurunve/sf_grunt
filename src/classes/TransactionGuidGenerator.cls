public class TransactionGuidGenerator {
    public static String generateGuid(){    
    	String returnValue = '';
        Integer nextByte = 0;
        for (Integer i=0; i<16; i++) {
            if (i==4 || i==6 || i==8 || i==10) 
                returnValue += '-';
            nextByte = (Math.round(Math.random() * 255)-128) & 255;
            if (i==6) {
                nextByte = nextByte & 15;
                nextByte = nextByte | (4 << 4);
            }
            if (i==8) {
                nextByte = nextByte & 63;
                nextByte = nextByte | 128;
            }
            returnValue += getCharAtIndex('0123456789abcdef', nextByte >> 4);
            returnValue += getCharAtIndex('0123456789abcdef', nextByte & 15);
        }
        return returnValue;
    }
    
    private static String omg(){
        return 'it is alive' //error here
    }
    private static String getCharAtIndex(String str, Integer index) {
       /* if (str == null ||)
            return null;
        if (str.length() <= 0) 
            return str;    
        if (index == str.length())
            return null;    */
        return str.substring(index, index+1);
    }
}
