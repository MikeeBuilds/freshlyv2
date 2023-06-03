module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'babel-plugin-root-import',
        plugins: ["nativewind/babel"],
        {
          rootPathSuffix: 'src',
        },
      ],
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@components': './src/components',
            '@config': './src/config',
            '@constants': './src/constants',
            '@contexts': './src/contexts',
            '@hooks': './src/hooks',
            '@navigation': './src/navigation',
            '@screens': './src/screens',
            '@services': './src/services',
            '@utils': './src/utils',
          },
        },
      ],
    ],
  };
};
