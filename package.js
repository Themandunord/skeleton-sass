Package.describe({
    name: 'rlespagnol:skeleton-sass'
    , version: '0.0.3', // Brief, one-line summary of the package.
    summary: 'A package to add the Skeleton framework to Meteor. The SASS version.', // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/Themandunord/skeleton-sass.git', // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.2.1');
    api.use("fourseven:scss@3.4.1", ["client"]);
    api.imply("fourseven:scss", ["client"]);
    api.add_files([
        'Skeleton-Sass/scss/base/_base-styles.scss'






        
        , 'Skeleton-Sass/scss/base/_functions.scss'






        
        , 'Skeleton-Sass/scss/base/_normalize.scss'






        
        , 'Skeleton-Sass/scss/base/_typography.scss'






        
        , 'Skeleton-Sass/scss/base/_utils.scss'






        
        , 'Skeleton-Sass/scss/base/_variables.scss'






        
        , 'Skeleton-Sass/scss/modules/_buttons.scss'






        
        , 'Skeleton-Sass/scss/modules/_code.scss'






        
        , 'Skeleton-Sass/scss/modules/_forms.scss'






        
        , 'Skeleton-Sass/scss/modules/_grid.scss'






        
        , 'Skeleton-Sass/scss/modules/_lists.scss'






        
        , 'Skeleton-Sass/scss/modules/_media-queries.scss'






        
        , 'Skeleton-Sass/scss/modules/_spacing.scss'






        
        , 'Skeleton-Sass/scss/modules/_tables.scss'






        
        , 'Skeleton-Sass/scss/skeleton.scss'






        
        , ], ['client'], {
        isImport: true
    });
});