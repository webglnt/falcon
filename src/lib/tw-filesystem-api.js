const available = () => !!window.showSaveFilePicker;

const showSaveFilePicker = fileName => window.showSaveFilePicker({
    suggestedName: fileName,
    types: [
        {
            description: 'FalconMod Project',
            accept: {
                'application/x.scratch.sb3': '.falcon'
            }
        },
        {
            description: 'PenguinMod Project',
            accept: {
                'application/x.scratch.sb3': '.pmp'
            }
        }
    ],
    excludeAcceptAllOption: true
});

const showOpenFilePicker = async () => {
    const [handle] = await window.showOpenFilePicker({
        multiple: false,
        types: [
            {
                description: 'FalconMod Project',
                accept: {
                    'application/x.scratch.sb3': ['.falcon']
                }
            },
            {
                description: 'PenguinMod Project',
                accept: {
                    'application/x.scratch.sb3': ['.pmp', '.pm']
                }
            },
            {
                description: 'Scratch Project',
                accept: {
                    'application/x.scratch.sb3': ['.sb3', '.sb2', '.sb']
                }
            }
        ]
    });
    return handle;
};

export default {
    available,
    showOpenFilePicker,
    showSaveFilePicker
};
