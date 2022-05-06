package com.ird.faa.service.util;


public class StringUtil {
    public static boolean isEmpty(String string) {
        return string == null || string.isEmpty();
    }

    public static boolean isNotEmpty(String string) {
        return !isEmpty(string);
    }

    public static boolean isNotEmpty(Object value) {
    return value!=null && !isEmpty(value.toString());
    }
}
