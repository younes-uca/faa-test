package com.ird.faa.service.util;


import java.math.BigDecimal;

public class NumberUtil {

    private static final String CHAINE_VIDE = "";

    public static double toDouble(String value) {
        if (value == null || value.isEmpty()) {
            return 0D;
        } else {
            return Double.parseDouble(value);
        }
    }


    public static BigDecimal toBigDecimal(String value) {
        if (value == null || value.isEmpty()) {
            return BigDecimal.ZERO;
        } else {
            return new BigDecimal(value);
        }
    }


    public static Boolean toBoolean(String value) {
        if (value == null || value.isEmpty()) {
            return false;
        } else {
            return new Boolean(value);
        }
    }

    public static int toInt(String value) {
        if (value == null || value.isEmpty()) {
            return 0;
        } else {
            return Integer.parseInt(value);
        }
    }

    public static String toString(Double value) {
        if (value == null) {
            return CHAINE_VIDE;
        } else {
            return String.valueOf(value);
        }
    }

    public static String toString(Integer value) {
        if (value == null) {
            return CHAINE_VIDE;
        } else {
            return String.valueOf(value);
        }
    }


    public static String toString(Boolean value) {
        if (value == null) {
            return CHAINE_VIDE;
        } else {
            return String.valueOf(value);
        }
    }

    public static String toString(Long value) {
        if (value == null) {
            return CHAINE_VIDE;
        } else {
            return String.valueOf(value);
        }
    }


    public static String toString(BigDecimal value) {
        if (value == null) {
            return CHAINE_VIDE;
        } else {
            return String.valueOf(value);
        }
    }

    public static Long toLong(String value) {
        if (value == null || value.isEmpty()) {
            return 0L;
        } else {
            return Long.parseLong(value);
        }
    }

}
