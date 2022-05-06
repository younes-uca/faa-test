package com.ird.faa.security.common;

public interface SecurityParams {
    public static final String JWT_HEADER_NAME="Authorization";
    public static final String SECRET="5354bb25-e458-4e6a-be9f-ef86f603e7f7";
    public static final long EXPIRATION=86400000;
    public static final String HEADER_PREFIX="Bearer ";
}
